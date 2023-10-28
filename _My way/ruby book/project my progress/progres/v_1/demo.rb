daysprogress = File.readlines('progress.txt')
days_training = 0;

hash_technologies = Hash.new(0)


daysprogress.each do |line|
    str_technologie = ''
    value = 0
    str_value = ''

    line.each_char do |chr|
      case chr
        when 'a'..'z' then str_technologie += chr
      else  
           case chr
             when '0'..'9' || '.' then str_value += chr
             else
                 (if chr == ']' then value = str_value.to_f end)
           end
            hash_technologies[str_technologie] = value
             next
       end
           str_technologie = ''             
    end

end

hash_technologies.each do |key,value|
    p key
end

puts

hash_technologies.keys.sort!.each_with_index do |technologi,i|
    p technologi
end

p hash_technologies.size







