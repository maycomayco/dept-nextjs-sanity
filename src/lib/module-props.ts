import type { Module } from '@/types';

// eslint-disable-next-line import/no-anonymous-default-export
export default function ({ _type, options, _key }: Partial<Module>) {
  return {
    id: `module-${_key}`,
    'data-module': _type,
    hidden: options?.hidden,
    style: options?.customStyles,
  };
}
