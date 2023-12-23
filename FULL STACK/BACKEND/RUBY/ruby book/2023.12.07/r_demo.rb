# Городская лотерея

class Lottery

  def initialize(**options)
      @limited_of_tickets = options[:limited_of_tickets] || 5
      @ticket_size = options[:ticket_size] || 3
      @all_tickets = Array.new(@limited_of_tickets) {  Ticket.new(@ticket_size).list }
  end

  def all_tickets = @all_tickets || []

  class Ticket
    include Comparable

    def initialize(size,arr = [])
      @size = size
      arr.include? @all = Array.new(@size) { rand(99) }
    end
    def r(arr = [])
      p
      b = Array.new(3) { rand(1,2)}
      @b = arr.include? : r() : b
    end

    def list = @all
  end

end

# lottery_1 =  Lottery.new(limited_of_tickets: 100,ticket_size: 3)
lottery_2 = Lottery.new()
p lottery_2.all_tickets

# pp lottery_1.all_tickets

