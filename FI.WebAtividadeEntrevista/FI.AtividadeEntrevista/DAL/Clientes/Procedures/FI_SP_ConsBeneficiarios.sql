﻿CREATE PROC FI_SP_ConsBeneficiarios
	@ID BIGINT
AS
BEGIN
	IF(ISNULL(@ID,0) = 0)
		SELECT ID, CPF, NOME FROM BENEFICIARIOS WITH(NOLOCK)
	ELSE
		SELECT ID, CPF, NOME FROM BENEFICIARIOS WITH(NOLOCK) WHERE IDCLIENTE = @ID
END