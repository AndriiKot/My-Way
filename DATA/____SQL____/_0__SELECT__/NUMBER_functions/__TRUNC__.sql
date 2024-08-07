﻿SELECT TRUNC(number1+number2) as towardzero
FROM decimals;

--My solution
SELECT 
    CASE 
        WHEN (number1 + number2) < 0 THEN -1 * FLOOR(ABS(number1 + number2))
        ELSE FLOOR(number1 + number2)
    END AS towardzero
FROM 
    decimals;
