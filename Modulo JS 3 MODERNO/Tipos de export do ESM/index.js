import { inline } from "./inline.js"
import defaultInline from "./inline.js"
import { group } from "./non-inline.js"
import exportDefault from "./non-inline.js"

inline()
defaultInline()//só pode usar um por arquivo 

group()
exportDefault()