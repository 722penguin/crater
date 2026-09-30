/**
 * Copyright 2025 RAIDS Lab
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
import { VariantProps } from 'class-variance-authority'
import { BookOpenIcon } from 'lucide-react'
import { useTranslation } from 'react-i18next'

import { Button, buttonVariants } from '@/components/ui/button'

import { getEmbeddedDocsUrl } from '@/utils/docs'

import { cn } from '@/lib/utils'

type DocsButtonProps = React.ComponentProps<'button'> &
  VariantProps<typeof buttonVariants> & {
    url: string
  } & (
    | { title: string; titleKey?: never }
    | {
        title?: never
        titleKey:
          | 'docsButton.viewDocs'
          | 'docsButton.jobTemplateDocs'
          | 'docsButton.platformDocs'
          | 'docsButton.readDocs'
          | 'docsButton.helpDocs'
          | 'docsButton.readNow'
      }
  )

const DocsButton = ({ title, titleKey, url, variant, className, ...props }: DocsButtonProps) => {
  const { t, i18n } = useTranslation()
  const language = i18n.resolvedLanguage || i18n.language || 'zh'
  return (
    <Button
      variant={variant ?? 'secondary'}
      className={cn('cursor-pointer', className)}
      {...props}
      asChild
    >
      <a href={getEmbeddedDocsUrl(language, url)} target="_blank" rel="noopener noreferrer">
        <BookOpenIcon />
        {titleKey ? t(titleKey) : title}
      </a>
    </Button>
  )
}

export default DocsButton
