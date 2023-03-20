using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using ReactPeopleCars.Data;
using ReactPeopleCars.Web.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ReactPeopleCars.Web.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PeopleCarsController : ControllerBase
    {
        private string _connectionString;
        public PeopleCarsController(IConfiguration configuration)
        {
            _connectionString = configuration.GetConnectionString("ConStr");
        }

        [HttpGet]
        [Route("getall")]
        public List<Person> GetAll()
        {
            var repo = new PeopleCarsRepository(_connectionString);
            return repo.GetAll();
        }

        [Route("addperson")]
        [HttpPost]
        public void Add(Person person)
        {
            var repo = new PeopleCarsRepository(_connectionString);
            repo.Add(person);
        }

        [Route("getpersonbyid")]
        public Person GetPersonById(int id)
        {
            var repo = new PeopleCarsRepository(_connectionString);
            return repo.GetPersonById(id);
        }
        [Route("addcar")]
        [HttpPost]
        public void Add(Car car)
        {
            var repo = new PeopleCarsRepository(_connectionString);
            repo.Add(car);
        }

        [Route("getcarsbypersonid")]
        public List<Car> GetCarsByPersonId(int id)
        {
            var repo = new PeopleCarsRepository(_connectionString);
            return repo.GetCarsByPersonId(id);
        }

        [Route("deletecars")]
        [HttpPost]
        public void DeleteCars(DeleteViewModel vm)
        {
            var repo = new PeopleCarsRepository(_connectionString);
            repo.DeleteCars(vm.Id);
        }
    }
}
