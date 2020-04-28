const IS_CHROME = typeof window.chrome !== 'undefined'

const get = IS_CHROME
  ? (args: string[]) => new Promise((resolve) => {
    window.chrome.storage.local.get(args, resolve)
  })
  : window.browser.storage.local.get

const set = IS_CHROME
  ? (args: object) => new Promise((resolve) => {
    window.chrome.storage.local.set(args, resolve)
  })
  : window.browser.storage.local.set

export default {
  get,
  set
}
