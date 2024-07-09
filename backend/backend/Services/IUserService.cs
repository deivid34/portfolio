using backend.Models;

namespace backend.Services
{
    public interface IUserService
    {
        User? GetUser(string username, string password);
        void AddUser(User user);
    }
}
