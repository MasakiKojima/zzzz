FROM centos:7

RUN yum install -y gcc zip zip-devel libzip libzip-devel httpd git
RUN yum install -y http://rpms.famillecollet.com/enterprise/remi-release-7.rpm

RUN localedef -f UTF-8 -i ja_JP ja_JP.UTF-8
ENV LANG="ja_JP.UTF-8" \
  LANGUAGE="ja_JP:ja" \
  LC_ALL="ja_JP.UTF-8"

RUN yum install --enablerepo=epel,remi-php72,remi -y \
  php \
  php-devel \
  php-fpm \
  php-cli \
  php-gd \
  php-mbstring \
  php-mcrypt \
  php-mysqlnd \
  php-pdo \
  php-xml \
  php-pear \
  php-pecl-zip \
  php-opcache

RUN sed -i -e "s|^;date.timezone =.*$|date.timezone = Asia/Tokyo|" /etc/php.ini
RUN sed -i -e "s|^post_max_size =.*$|post_max_size = 50M|" /etc/php.ini
RUN sed -i -e "s|^memory_limit =.*$|memory_limit = 256M|" /etc/php.ini
RUN sed -i -e "s|^upload_max_filesize =.*$|upload_max_filesize = 45M|" /etc/php.ini
RUN sed -i -e "s|^short_open_tag =.*$|short_open_tag = On|" /etc/php.ini
RUN sed -i -e "s|^display_errors =.*$|display_errors = On|" /etc/php.ini

# MySQLのインストール
RUN yum install -y mysql

COPY ./httpd.conf /etc/httpd/conf/httpd.conf

EXPOSE 80
CMD ["/usr/sbin/httpd", "-D", "FOREGROUND"]
