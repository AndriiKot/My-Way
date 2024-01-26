arr_lines = File.readlines('new_format_progress.txt')

File.open("delete_commas.txt", "w+") do |file|
  arr_lines.each do |el|
    if el.size == 1 and el == "\n"
       next
    end
    file.puts(el.delete ',')
  end
end