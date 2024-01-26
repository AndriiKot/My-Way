daysprogress = File.readlines('progress.txt')
days_training = 0
t = Time.now


daysprogress.each do |line|
    days_training += 1 if line.end_with?(")\n")  
end


puts "Today: #{t.year}-#{t.month}-#{t.day}"
puts "#{days_training} days of training"






