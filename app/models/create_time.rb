class CreateTime < ActiveHash::Base
  self.data = [
    { id: 1, name: '--' },
    { id: 2, name: '9:00~9:50' },
    { id: 3, name: '10:00~10:50' },
    { id: 4, name: '11:00~11:50' },
    { id: 5, name: '12:00~12:50' },
    { id: 6, name: '14:00~14:50' },
    { id: 7, name: '15:00~15:50' },
    { id: 8, name: '16:00~16:50' },
    { id: 9, name: '17:00~17:50' },
    { id: 10, name: '18:00~18:50' },
    { id: 11, name: '19:00~19:50' },
    { id: 12, name: '20:00~20:50' },
  ]

  include ActiveHash::Associations
  has_many :reservations
  
  end
