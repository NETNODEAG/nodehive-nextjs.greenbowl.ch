'use client';

import { subscribe, SubscribeState } from '@/actions/_newsletter';
import { useFormState } from 'react-dom';

import { SendIcon } from '@/lib/icons';

export default function Newsletter() {
  const initialState: SubscribeState = {} as SubscribeState;
  const [state, dispatch] = useFormState(subscribe, initialState);

  return (
    <div className="flex max-w-[450px] flex-col gap-6">
      <h3 className="text-primary">Stay up to date with our Newsletter</h3>

      <form action={dispatch} className="space-y-2">
        <div className="relative">
          <label htmlFor="email-address" className="sr-only">
            Email address
          </label>

          <input
            id="email-address"
            name="email"
            type="email"
            placeholder="Enter your email"
            required
            className="w-full rounded-md border border-primary bg-transparent pr-[42px] text-primary placeholder:text-primary"
          />
          <button className="absolute bottom-0 right-0 top-0 flex w-[42px] items-center justify-center rounded-br-md rounded-tr-md bg-primary text-white">
            <span className="sr-only">Subscribe</span>
            <SendIcon />
          </button>
        </div>

        {state?.message?.text && (
          <div className="text-xs text-primary">
            <p>
              {state.message.title}. {state.message.text}
            </p>
          </div>
        )}
      </form>
    </div>
  );
}
