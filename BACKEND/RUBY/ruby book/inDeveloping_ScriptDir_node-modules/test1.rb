require 'fileutils'

arr = ARGV.each_slice(2).to_a # [[path, folder],[path, foder] ...]
arr_paths_folders = arr.uniq || [] # removing duplicate if there are any

def enter_path_and_folder(hash = {}) 
    print "Enter path: "; path = gets.strip
    print "Enter folder: "; folder = gets.strip
    hash[path] = folder
    print "Do you want to add elements to be deleted?(Y/N): "
    gets.strip[0]&.casecmp?('y') ? enter_path_and_folder(hash) : hash
end

arr_paths_folders = arr_paths_folders.size == 0 ? enter_path_and_folder() : arr_paths_folders



def array_find_nested_folders(folder_path, folder_name)
    nested_folders = []

    return File.directory?(folder_path) ? 'Valide' : 'Not Valid'
  
    Dir.foreach(folder_path) do |item|
      next if item == '.' || item == '..'
  
      item_path = File.join(folder_path, item)
      
      if File.directory?(item_path)
        next if (folder_path.match?(item))
        if File.basename(item_path) == folder_name
          nested_folders << item_path
        end
  
        nested_folders += array_find_nested_folders(item_path, folder_name)
      end
    end
  
    return nested_folders
  end

  arr_paths_folders.each do |element|
    p array_find_nested_folders(element[0],element[1])
  end
  # p array_find_nested_folders("./",'folder1')

  # arr.each do |path|
  #   FileUtils.remove_entry_secure(path)
  # end

  

