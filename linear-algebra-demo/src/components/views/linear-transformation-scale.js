import React from 'react'
import { Matrix } from 'linear-algebra/matrix'

import LTExample from '../linear-transformation-example'

const matrix = new Matrix([3, 0, 0], [0, 3, 0], [0, 0, 3])

export default () => <LTExample matrix={matrix} />
