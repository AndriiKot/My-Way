arr_lines = File.readlines('progress.txt')

File.open("delete_commas.txt", "w+") do |file|
  arr_lines.each do |el|
    file.puts(el.delete ',')
  end
end