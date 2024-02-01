

# def folder_size(folder_path)
#     total_size = 0
#     Dir.glob(File.join(folder_path, '**', '*')).each do |file|
#       next if File.directory?(file) 
#       total_size += File.size(file)
#     end
#     total_size
# end

# def find_nested_folders(folder_path, folder_name)
#     nested_folders = []
  
#     Dir.foreach(folder_path) do |item|
#       next if item == '.' || item == '..'
  
#       item_path = File.join(folder_path, item)
  
#       if File.directory?(item_path)
#         if File.basename(item_path) == folder_name
#           nested_folders << item_path
#         end
  
#         nested_folders += find_nested_folders(item_path, folder_name)
#       end
#     end
  
#     return nested_folders
#   end
  

  # total_size = 0

  # find_nested_folders(folder_path, folder_name).each_with_index do |path|
  #   total_size += folder_size(path)
  # end

def find_nested_folders_2(folder_path, folder_name)
    nested_folders = []
  
    Dir.foreach(folder_path) do |item|
      next if item == '.' || item == '..'
  
      item_path = File.join(folder_path, item)
      
      if File.directory?(item_path)
        next if (folder_path.match?(item))
        if File.basename(item_path) == folder_name
          p folder_path
          p item
          p folder_path.match?(item)
          nested_folders << item_path
        end
  
        nested_folders += find_nested_folders_2(item_path, folder_name)
      end
    end
  
    return nested_folders
end

  folder_path = './'
  folder_name = 'node_modules'       


  total_size_2 = 0
  find_nested_folders_2(folder_path, folder_name)

  # find_nested_folders_2(folder_path, folder_name).each_with_index do |path|
  #   total_size += folder_size(path)
  # end




  # puts "#{total_size}.bytes"
  # puts "#{(total_size/1024.00).round}.Mb"
  # puts "#{(total_size/1024.00/1024.00).round}.Gb"

  # puts "#{total_size_2}.bytes"
  # puts "#{(total_size_2/1024.00).round}.Mb"
  # puts "#{(total_size_2/1024.00/1024.00).round}.Gb"


  