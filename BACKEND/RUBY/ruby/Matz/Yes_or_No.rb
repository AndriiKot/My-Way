def are_you_sure?
    while true
        print "Вы уверены? [y/n]:"
        res = gets
        case res
        when /^[yY]/
            return true
        when /^[nN]/
            return false
        end
    end
end

p are_you_sure?