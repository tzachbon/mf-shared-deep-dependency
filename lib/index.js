import { v3 } from 'uuid';

export function getUUID() {
  const MY_NAMESPACE = '1b671a64-40d5-491e-99b0-da01ff1f3341';

  return v3(Math.random().toString(), MY_NAMESPACE);
}
