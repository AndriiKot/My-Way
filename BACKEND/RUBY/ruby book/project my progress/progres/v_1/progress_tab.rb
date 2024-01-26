daysprogress = File.readlines('progress.txt')
days_training = 0;


daysprogress.each do |line|
    days_training += 1 if line.end_with?(")\n")  
end

puts "#{days_training} days of training"






