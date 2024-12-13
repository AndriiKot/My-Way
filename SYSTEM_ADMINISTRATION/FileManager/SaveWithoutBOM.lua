local function saveFileWithoutBOM()
    -- Получаем текущий файл
    local fileName = far.GetCurrentDirectory() .. "\\" .. far.GetCurrentFile().FileName

    -- Открываем файл для чтения
    local file = io.open(fileName, "rb")
    if not file then
        far.Message("Не удалось открыть файл", "Ошибка", 0)
        return
    end

    -- Читаем содержимое
    local content = file:read("*all")
    file:close()

    -- Удаляем BOM, если он присутствует
    if content:sub(1, 3) == "\xEF\xBB\xBF" then
        content = content:sub(4)
    end

    -- Сохраняем файл без BOM
    file = io.open(fileName, "wb")
    if not file then
        far.Message("Не удалось сохранить файл", "Ошибка", 0)
        return
    end
    file:write(content)
    file:close()

    far.Message("Файл успешно сохранен без BOM", "Успех", 0)
end

-- Регистрация горячей клавиши F2
far.SetMacro("F2", "SaveWithoutBOM", saveFileWithoutBOM)

