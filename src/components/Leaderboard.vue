<template>
  <div class="leaderboard">
      <div class="container">
          <div class="row">
             <div class="col-md-7 text">
                 <h1><span class="span">DYNAMIC INVESTMENT</span> LEADERBOARD</h1>
                 <h2 class="span">This Week Top Trades</h2>
                    <table class="table table-bordered rank">
                        <thead>
                          <tr>
                            <th>RANK</th>
                            <th>NAME</th>
                            <th>TOTAL</th>
                            <th class="rank-asset">ASSET</th>
                            <th class="rank-type">TYPE</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td class="place1"><img src="../assets/images/cup1.png" alt="">   &nbsp;&nbsp; 1</td>
                           <td> <img src="../assets/images/flag1.png" alt="">&nbsp;&nbsp;George C.</td>
                            <td>4,906,390 <i class="rtarrow fa fa-angle-down" aria-hidden="true"></i></td>
                             <td class="rank-asset">&nbsp;EUR/USD</td>
                             <td class="rank-type">&nbsp;Pairs</td>
                          </tr>
                          <tr>
                            <td class="place2"><img src="../assets/images/cup2.png" alt="">   &nbsp;&nbsp; 2</td>
                             <td> <img src="../assets/images/flag2.png" alt="">&nbsp;&nbsp;Johns S.</td>
                            <td>4,718,230 <i class="rtarrow fa fa-angle-down" aria-hidden="true"></i></td>
                             <td class="rank-asset">&nbsp;EUR/USD</td>
                              <td class="rank-type">&nbsp;Sixty Seconds</td>
                          </tr>
                          <tr>
                            <td class="place3"><img src="../assets/images/cup3.png" alt="">   &nbsp;&nbsp; 3</td>
                             <td> <img src="../assets/images/flag3.png" alt="">&nbsp;&nbsp;Alfonson B.</td>
                            <td>3,547,250 <i class="rtarrow fa fa-angle-down" aria-hidden="true"></i></td>
                             <td class="rank-asset">&nbsp;EUR/JPY</td>
                              <td class="rank-type">&nbsp;Sixty Seconds</td>
                          </tr>
                          <tr>
                            <td class="place-star"><img src="../assets/images/cup2.png" alt="">   &nbsp;&nbsp; 4</td>
                             <td> <img src="../assets/images/flag4.png" alt="">&nbsp;&nbsp;Razvan F.</td>
                            <td>2,987,410 <i class="rtarrow fa fa-angle-down" aria-hidden="true"></i></td>
                             <td class="rank-asset">&nbsp;AUD/USD</td>
                              <td class="rank-type">&nbsp;Ladder</td>
                          </tr>
                          <tr>
                            <td class="place-star"><img src="../assets/images/cup2.png" alt="">   &nbsp;&nbsp; 5</td>
                             <td> <img src="../assets/images/flag5.png" alt="">&nbsp;&nbsp;Lucas T.</td>
                            <td>2,832,410 <i class="rtarrow fa fa-angle-down" aria-hidden="true"></i></td>
                             <td class="rank-asset">&nbsp;EUR/USD</td>
                              <td class="rank-type">&nbsp;Pairs</td>
                          </tr>
                        </tbody>
                      </table>
             </div>
          </div>
      </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
@import '../assets/styles/_colors';
.leaderboard{
    padding: 2rem 0;
    background:url('../assets/images/section-banner4.jpg');
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    color: #fff;
    .text{
        h1{
            font-weight: bold;
            padding-bottom: .5rem;
        }
        .span{
            color: $secondary-color;
        }
    }
    table.table.table-bordered.rank {
    background: rgba(255, 255, 255, 0.16);
}
.table-bordered {
    border: 1px solid #ddd;
}
thead {
    background: #ffae00;
}
table.table.table-bordered.rank th, table.table.table-bordered.rank tr, table.table.table-bordered.rank td {
    border: 1px solid #000;
    text-align: center;
}
.table {
    margin-bottom: 20px;
    border-spacing: 0;
    border-collapse: collapse;
    overflow-x: hidden !important;
    width: 100%;
    max-width: 100%;
}
tr{
       opacity: .9;
       color:#fff;
       font-size: .9rem;
}
i.rtarrow.fa {
    font-size: 18px;
    color: #FFAE00;
    display: none;
    float: right;
}
}

//MEDIA QUERIES
@media only screen and (max-width: 600px){
    .text{
        h1{
            font-size: 1.5rem;
            letter-spacing: 2px;
        }
        h2{
            font-size: 1.5rem;
            padding-bottom: 1rem;
        }
    }
    .rank-asset, .rank-type {
    display: none;
}
td, th {
    padding: 0;
}
th {
    text-align: left;
}
}

@media (max-width: 768px){
    i.rtarrow.fa {
    display: block;
}
}
</style>