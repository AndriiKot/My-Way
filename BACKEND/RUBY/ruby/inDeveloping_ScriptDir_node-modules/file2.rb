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







