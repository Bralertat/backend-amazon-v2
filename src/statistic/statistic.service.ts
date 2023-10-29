import { Injectable } from '@nestjs/common'
import { PrismaService } from 'src/prisma.service'

@Injectable()
export class StatisticService {
  constructor(
    private prisma: PrismaService
  ) {}

  async getMain() {
    //1:30:00 тут не совсем правильно сделано 1:38:00
    const orderCount = await this.prisma.order.count()
    const reviewsCount = await this.prisma.review.count()
    const usersCount = await this.prisma.user.count()

    const totalAmount = await this.prisma.order.aggregate({
      _sum: {
        total: true
      }
    })

    return [
      {
        name: 'Orders',
        value: orderCount
      },
      {
        name: 'Reviews',
        value: reviewsCount
      },
      {
        name: 'Users',
        value: usersCount
      },
      {
        name: 'Total amount',
        value: totalAmount._sum.total || 0
      }
    ]
  }

  // async getMain(userId: number) {
  //   //1:30:00 тут не совсем правильно сделано
  //   const orderCount = await this.prisma.order.count()
  //   const reviewsCount = await this.prisma.review.count()
  //   const usersCount = await this.prisma.user.count()

  //   const totalAmount = await this.prisma.order.aggregate({
  //     _sum: {
  //       total: true
  //     }
  //   })

  //   const user = await this.userService.byId(userId, {
  //     orders: {
  //       select: {
  //         items: {
  //           select: {
  //             price: true
  //           }
  //         }
  //       }
  //     },
  //     reviews: true
  //   })

  //   // const totalAmount = await this.prisma.order.aggregate({
  //   //   where: { userId },
  //   //   _sum: { items: true }
  //   // orders[0].items[0].price
  //   // })

  //   // return user.orders
  //   return [
  //     {
  //       name: 'Orders',
  //       value: user.orders.length
  //     },
  //     {
  //       name: 'Reviews',
  //       value: user.reviews.length
  //     },
  //     {
  //       name: 'Favorites',
  //       value: user.favorites.length
  //     },
  //     {
  //       name: 'Total amount',
  //       value: 1000
  //     }
  //   ]
  // }
}
