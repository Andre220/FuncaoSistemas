using FI.AtividadeEntrevista.BLL;
using FI.AtividadeEntrevista.DML;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using WebAtividadeEntrevista.Models;

namespace WebAtividadeEntrevista.Controllers
{
    public class BeneficiarioController : Controller
    {
        // GET: Beneficiario
        public ActionResult Index()
        {
            return View();
        }

        public ActionResult BeneficiarioIncluir(BeneficiarioModel model)
        {
            BoBeneficiario bo = new BoBeneficiario();

            if (!this.ModelState.IsValid)
            {
                List<string> erros = (from item in ModelState.Values
                                      from error in item.Errors
                                      select error.ErrorMessage).ToList();

                Response.StatusCode = 400;
                return Json(string.Join(Environment.NewLine, erros));
            }
            else
            {
                model.Id = bo.Incluir(new Beneficiario()
                {
                    CPF = model.CPF,
                    Nome = model.Nome,
                    IdCliente = model.IdCliente
                });

                if (model.Id == 0)
                {
                    return Json("CPF já cadastrado!");
                }
                else
                {
                    return Json("Cadastro efetuado com sucesso");
                }
            }
        }

        //[HttpPost]
        //public JsonResult BeneficiarioList(int jtStartIndex = 0, int jtPageSize = 0, string jtSorting = null)
        //{
        //    try
        //    {
        //        int qtd = 0;
        //        string campo = string.Empty;
        //        string crescente = string.Empty;
        //        string[] array = jtSorting.Split(' ');

        //        if (array.Length > 0)
        //            campo = array[0];

        //        if (array.Length > 1)
        //            crescente = array[1];

        //        List<Beneficiario> beneficiarios = new BoBeneficiario().Pesquisa(jtStartIndex, jtPageSize, campo, crescente.Equals("ASC", StringComparison.InvariantCultureIgnoreCase), out qtd);

        //        //Return result to jTable
        //        return Json(new { Result = "OK", Records = beneficiarios, TotalRecordCount = qtd });
        //    }
        //    catch (Exception ex)
        //    {
        //        return Json(new { Result = "ERROR", Message = ex.Message });
        //    }
        //}
    }
}