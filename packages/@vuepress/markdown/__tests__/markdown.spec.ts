import { createMarkdown } from '@vuepress/markdown'

describe('@vuepress/markdown > markdown', () => {
  describe('options', () => {
    it.todo('anchor')

    it.todo('emoji')

    it.todo('extractHeaders')

    it.todo('links')
  })

  describe('e2e', () => {
    const md = createMarkdown()

    it.todo('anchor')

    it('should parse emoji', () => {
      const rendered = md.render(':smile:')
      expect(rendered).toBe('<p>😄</p>\n')
    })
  })
})
