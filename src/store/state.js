import fictionbooks from '../data/fictionbooks'
import nonfictionbooks from '../data/nonfictionbooks'

export default {
  fictionbooks,
  nonfictionbooks,
  books: [...fictionbooks, ...nonfictionbooks]
}
