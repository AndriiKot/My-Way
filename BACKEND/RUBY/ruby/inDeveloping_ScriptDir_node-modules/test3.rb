
Dir.foreach(folder_path) do |item|
      next if item in ['.', '..']
  
      item_path = File.join(folder_path, item)
      next unless File.directory?(item_path)
      next if (folder_path.match?(folder_name))  #!!! no search is carried out within the desired object !!!
      if File.basename(item_path) == folder_name
        nested_folders << item_path
      end
  
      nested_folders += array_find_nested_folders(item_path, folder_name)
      end
    end
