export const setSort = (sort, sortDirection, param) => {
  let newSort = param
  let newSortDirection

  if (sort === param) {
    sortDirection === 'asc' ? newSortDirection = 'desc' : newSortDirection = 'asc'
  } else {
    newSortDirection = 'asc'
  }

  return { newSort, newSortDirection }
}