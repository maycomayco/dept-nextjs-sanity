import { createClient } from 'next-sanity'

import { apiVersion, dataset, projectId } from '@/lib/env'
import { isDev } from '@/lib/is-dev'

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: isDev ? true : false,
})
