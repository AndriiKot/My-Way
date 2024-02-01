require 'fileutils'


def folder_size(folder_path)
    total_size = 0
    Dir.glob(File.join(folder_path, '**', '*')).each do |file|
      next if File.directory?(file) 
      total_size += File.size(file)
    end
    total_size
end
  

def find_nested_folders_2(folder_path, folder_name)
    nested_folders = []
  
    Dir.foreach(folder_path) do |item|
      next if item == '.' || item == '..'
  
      item_path = File.join(folder_path, item)
      
      if File.directory?(item_path)
        next if (folder_path.match?(item))
        if File.basename(item_path) == folder_name
          nested_folders << item_path
        end
  
        nested_folders += find_nested_folders_2(item_path, folder_name)
      end
    end
  
    return nested_folders
end

  folder_path = './'
  folder_name = 'node_modules'       

  # total_size_1 = 0
  # cicle_1 = 0

  # find_nested_folders_1(folder_path, folder_name).each_with_index do |path|
  #   total_size_1 += folder_size(path)
  #   cicle_1 += 1
  # end

  total_size_2 = 0
  cicle_2 = 0

  # find_nested_folders_2(folder_path, folder_name).each_with_index do |path|
  #   total_size_2 += folder_size(path)
  #   cicle_2 += 1
  # end


  # puts "Total size_1: "
  # puts "#{total_size_1}.bytes"
  # puts "#{(total_size_1/1024.00).round}.Mb"
  # puts "#{(total_size_1/1024.00/1024.00).round}.Gb"

  # puts "Total size_2: "
  # puts "#{total_size_2}.bytes"
  # puts "#{(total_size_2/1024.00).round}.Mb"
  # puts "#{(total_size_2/1024.00/1024.00).round}.Gb"

  # puts cicle_1
  # puts cicle_2

  arr = find_nested_folders_2(folder_path, folder_name)
  
  puts arr

  File.open('arr_path_node-modules.txt','w+') do |file|
    file.puts(arr)
  end

  

  