import { useState } from 'react';
import { apiUrl } from '../utils/constants';
import { useInput } from '../hooks/useInput';
import Link from 'next/link';
import { Header } from '../components/header';
export default function Login() {
  const email = useInput('');
  const password = useInput('');
  return (
    <div>
      <Header />
      <form
        method="post"
        action={apiUrl}
        onSubmit={async e => {
          e.preventDefault();
          const url = '/login';
          const token = '';
          try {
            const response = await fetch(url, {
              headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json, text-plain, */*',
                'X-Requested-With': 'XMLHttpRequest',
                'X-CSRF-TOKEN': token,
              },
              method: 'post',
              credentials: 'same-origin',
              body: JSON.stringify({
                email: email.value,
                password: password.value,
              }),
            });
          } catch (e) {
            throw e;
          }
        }}
      >
        <label>
          Email
          <input type="email" {...email} />
        </label>
        <label>
          Password
          <input type="password" {...password} />
        </label>
        <button type="submit">送信</button>
      </form>
    </div>
  );
}
