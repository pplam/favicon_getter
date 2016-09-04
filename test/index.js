import { expect } from 'chai'
import fetchFavicon from '../src'

describe('test fetchFavicon', () => {
  it('should get hacker news favicon', async () => {
    const ico = await fetchFavicon('https://news.ycombinator.com')
    expect(ico).to.equal('https://news.ycombinator.com/favicon.ico')
  })
})
