require 'json'

json = File.read('./areas.json')
# json = '["backend","devops","frontend","gamedev","universal"]'
p json
arr = JSON.parse(json.strip())
p arr



path = "./areas/"
array_files = Dir.open(path).to_a





array_files =  Dir.open(path).select { !%w[. ..].include?(_1) }





IT_Areas.each do |areas,array_technologies|
    array_files.each do |file|
        if file.start_with?  areas
            File.open("#{path}""#{file}","w+") { |f| f.puts(array_technologies.to_s)}
            array_files.delete(file)
        end
    end
end


