using Microsoft.EntityFrameworkCore.Storage;
using System.Linq.Expressions;

namespace ApplicationTracker.Repo
{
    public interface IRepository<T> where T : class
    {
        IDbContextTransaction BeginTransaction();
        Task CompleTransaction(IDbContextTransaction transaction);
        Task<T> GetByIdAsync(object id);
        IQueryable<T> GetQueyable();
        Task InsertAsync(T entity);
        void Update(T entity);
        void Delete(T entity);
        IQueryable<T> Select(Expression<Func<T, bool>> expression);
        Task SaveChangesAsync();
    }
}
