import { library, dom, config } from '@fortawesome/fontawesome-svg-core'

// Free
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'

// Pro
import { fas as fasPro } from '@fortawesome/pro-solid-svg-icons'
import { far as farPro } from '@fortawesome/pro-regular-svg-icons'
import { fal } from '@fortawesome/pro-light-svg-icons'

dom.watch()
config.autoReplaceSvg = 'nest'
library.add(
  fas,
  far,
  fasPro,
  farPro,
  fal
);
