using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Cors;
using System.Web.Http.Description;

namespace AirLineReservationSystemProject.Controllers
{
    [EnableCors(origins: "http://localhost:4200", headers: "*", methods: "*")]
    public class UserRegisterationController : ApiController
    {
        private AirlineReservationEntities db = new AirlineReservationEntities();
        //// POST: api/Users
        [ResponseType(typeof(tblUser))]
        [HttpPost]
        public IHttpActionResult PosttblUser(tblUser tblUser)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }
            db.proc_UserRegisteration(tblUser.Title, tblUser.FirstName, tblUser.LastName, tblUser.DOB, tblUser.PhoneNo, tblUser.Email, tblUser.Password);
            //db.tblUsers.Add(tblUser);
            db.SaveChanges();

            return CreatedAtRoute("DefaultApi", new { id = tblUser.UserID }, tblUser);
        }
        // GET: api/UserRegisteration
        //public IEnumerable<string> Get()
        //{
        //    return new string[] { "value1", "value2" };
        //}

        //// GET: api/UserRegisteration/5
        //public string Get(int id)
        //{
        //    return "value";
        //}

        //// POST: api/UserRegisteration
        //public void Post([FromBody]string value)
        //{
        //}

        //// PUT: api/UserRegisteration/5
        //public void Put(int id, [FromBody]string value)
        //{
        //}

        //// DELETE: api/UserRegisteration/5
        //public void Delete(int id)
        //{
        //}
    }
}
