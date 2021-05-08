export function fetchCount (amount = 1) {
  return Promise((resolve) =>
    setTimeout(() => resolve({ data: amount }), 500)
  )
}
