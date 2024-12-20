import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {

    const authHeader = request.headers.get('Authorization');
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      return NextResponse.json(
        { error: 'Missing or invalid bearer token' },
        { status: 401 }
      );
    }

    const token = authHeader.split(' ')[1];
    // Here you would validate the bearer token against your auth service
    // This is just a placeholder implementation
    if (token) {
      const formData = new URLSearchParams();
      formData.append('grant_type', 'client_credentials');
      formData.append('client_id', process.env.UIFORM_CLIENT_ID!);
      formData.append('client_secret', process.env.UIFORM_CLIENT_SECRET!);
      formData.append('scope', 'documents_api');
      formData.append('audience', process.env.UIFORM_AUDIENCE!);

      const response = await fetch(process.env.UIFORM_TOKEN_URL!, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: formData.toString()
      });

      if (!response.ok) {
        throw new Error('Failed to generate token');
      }

      const tokenData = await response.json();
      return NextResponse.json({
        token: tokenData,

      });
    }

    return NextResponse.json(
      { error: 'Invalid credentials' },
      { status: 401 }
    );
  } catch (error) {
    return NextResponse.json(
      { error: 'Invalid request' },
      { status: 400 }
    );
  }
} 