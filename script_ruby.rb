

def removing_space_all_depth(folder_path = './')
  Dir.glob(File.join(folder_path,"**","*")) do |path|
    new_folder_or_file_name = path.strip.gsub(/[^\w[а-яА-Я]\.]/,'_')
    File.rename(path, new_folder_or_file_name)
  end
end

