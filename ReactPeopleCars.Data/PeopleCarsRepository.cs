using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ReactPeopleCars.Data
{
    public class PeopleCarsRepository
    {
        private string _connectionString;
        public PeopleCarsRepository(string connectionString)
        {
            _connectionString = connectionString;
        }

        public List<Person> GetAll()
        {
            using var context = new PeopleCarsDataContext(_connectionString);
            return context.People.Include(p => p.Cars).ToList();
        }

        public void Add(Person person)
        {
            using var context = new PeopleCarsDataContext(_connectionString);
            context.People.Add(person);
            context.SaveChanges();
        }

        public Person GetPersonById(int id)
        {
            using var context = new PeopleCarsDataContext(_connectionString);
            return context.People.FirstOrDefault(p => p.Id == id);
        }
        public void Add(Car car)
        {
            using var context = new PeopleCarsDataContext(_connectionString);
            context.Cars.Add(car);
            context.SaveChanges();
        }
        public List<Car> GetCarsByPersonId(int id)
        {
            using var context = new PeopleCarsDataContext(_connectionString);
            return context.Cars.Where(c => c.PersonId == id).ToList();

        }

        public void DeleteCars(int id)
        {
            using var context = new PeopleCarsDataContext(_connectionString);
            context.Cars.RemoveRange(context.Cars.Where(c => c.PersonId == id));
            context.SaveChanges();
        }

    }
}
