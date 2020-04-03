import { useState } from 'react';
import { apiUrl } from '../utils/constants';
export default function Login() {
  const [email, setEmail] = useState('');
  return (
    <div>
      <form
        method="post"
        action={apiUrl}
        onSubmit={e => {
          e.preventDefault();
        }}
      >
        <input type="email" value={email} onChange={setEmail} />
        <button type="submit">送信</button>
      </form>
    </div>
  );
}
