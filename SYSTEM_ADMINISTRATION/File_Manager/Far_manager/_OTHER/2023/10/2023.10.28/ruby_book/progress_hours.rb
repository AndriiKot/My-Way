daysprogress = File.readlines('progress.txt')
days_training = 0;

hash_technologies = Hash.new(0)

daysprogress.each do |line|
    str_technologie = ''

    line.each_char do |chr|
      case chr
       when 'a'..'z' then str_technologie += chr
      else  
           if str_technologie != ''
            hash_technologies[str_technologie] += 0 
           else
             next
           end
           str_technologie = ''
      end              
    end

end



hash_technologies.keys.sort!.each do |technologi|
    puts "technology: #{technologi}"
end

puts "Total: #{hash_technologies.size}"







