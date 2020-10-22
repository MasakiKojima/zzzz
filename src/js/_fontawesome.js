// https://fontawesome.com/how-to-use/with-the-api/

import { config, library, dom } from '@fortawesome/fontawesome-svg-core'

// Light
import { faArrowUp as falArrowUp } from '@fortawesome/pro-light-svg-icons/faArrowUp'

// Regular
import { faAngleRight as farAngleRight } from '@fortawesome/pro-regular-svg-icons/faAngleRight'
import { faAngleLeft as farAngleLeft } from '@fortawesome/pro-regular-svg-icons/faAngleLeft'

// Solid
import { faAngleDown as fasAngleDown } from '@fortawesome/pro-solid-svg-icons/faAngleDown'

// Duotone
import { faAppleAlt as fadAppleAlt } from '@fortawesome/pro-duotone-svg-icons/faAppleAlt'

// Brand
import { faFacebookSquare as fabFacebookSquare } from '@fortawesome/free-brands-svg-icons/faFacebookSquare'

config.keepOriginalSource = false

library.add(
  // Light
  falArrowUp,

  // Regular
  farAngleRight,
  farAngleLeft,

  // Solid
  fasAngleDown,

  // Duotone
  fadAppleAlt,

  // Brand
  fabFacebookSquare
)

dom.watch()
