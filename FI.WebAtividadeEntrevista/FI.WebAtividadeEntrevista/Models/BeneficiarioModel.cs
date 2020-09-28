using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace WebAtividadeEntrevista.Models
{
    /// <summary>
    /// Classe de modelo do beneficiário
    /// </summary>
 
    public class BeneficiarioModel
    {
        /// <summary>
        /// Id univoco do beneficiário no banco
        /// </summary>
        public long Id { get; set; }

        /// <summary>
        /// CPF do beneficiário
        /// </summary>
        [Required]
        public string CPF { get; set; }

        /// <summary>
        /// Nome do beneficiário
        /// </summary>
        [Required]
        public string Nome { get; set; }

        public int IdCliente { get; set; }
    }
}