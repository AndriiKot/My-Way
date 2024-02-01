require 'fileutils'

array_delete_folders = ARGV
array_delete_folders.each_slice(2).to_a

def eneter_path_and_folder 
    p "HI !!"
end

array_delete_folders.size == 0 ? eneter_path_and_folder() : (print "NOt Empty!")
