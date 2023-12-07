daysprogress = File.readlines('progress.txt')
days_training = 0;


daysprogress.each do |line|
    days_training += 1 if line.strip.end_with?(')')  
    p line ; sleep 0.5 
end

puts "#{days_training} days of training"






