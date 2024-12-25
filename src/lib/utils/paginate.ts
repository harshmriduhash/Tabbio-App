export default function paginate(totalItems: number, page: number, pageLimit: number) {
    const totalPages = Math.ceil(totalItems / pageLimit);
    const nextPage = page < totalPages ? page + 1 : null;
    const prevPage = page > 1 ? page - 1 : null;
  
    return {
      nextPage: nextPage || 0,
      prevPage: prevPage || 0,
      currentPage: page,
      pages: totalPages,
      total: totalItems,
    };
  }