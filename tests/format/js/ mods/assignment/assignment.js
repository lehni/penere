const value1 = (
  isSchema(schema) &&
  Object.keys(schema?.forms || {}).length > 1
)

const match = (
  isString(value) &&
  value.match(/^\s*([+-]?\d+)\s*\/\s*([+-]?\d+)\s*$/)
)

const value2 = (
  this.relate &&
  this.hasOptions && (
    value === null && (
      this.value !== null ||
      this.veryLongDefaultValue !== null
    ) ||
    isReferenceVeryLongCall(this.value)
  )
)

const events1 = this.$events || (this.$events = Object.create(null))

const events2 = this.$events ??= Object.create(null)

const hostnameRegExp = /^[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?(?:\.[a-z0-9](?:[-0-9a-z]{0,61}[0-9a-z])?)*$/i

const str = path
  // Convert from JavaScript property access notation to JSON pointers,
  // while preserving '..' in paths:
  .replace(/\.([^./]+)/g, '/$1')
  // Expand array property access notation ([])
  .replace(/\[['"]?([^'"\]]*)['"]?\]/g, '/$1')

const offsetX = win.pageXOffset !== undefined ? win.pageXOffset
  : (doc.documentElement || body.parentNode || body).scrollLeft

const index = this.isTransient
  ? // For transient data, the index is used as the id
    itemId
  : data?.findIndex(
      (item, index) =>
        this.getItemId(sourceSchema, item, index) === itemId
    )

const radioSelectedAttr =
  (isAnyValueSelected &&
    node.getAttribute(radioAttr.toLowerCase()) === radioValue) ||
  (!isAnyValueSelected &&
    values[a].default === true) ||
  a === 0;
