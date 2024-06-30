# Use a base image with PHP and necessary extensions
FROM php:8.1-fpm

# Set working directory
WORKDIR /var/www

# Install dependencies
COPY composer.json composer.lock ./
RUN apt-get update && apt-get install -y \
    libpng-dev \
    libjpeg-dev \
    libfreetype6-dev \
    libzip-dev \
    zip \
    unzip \
    && docker-php-ext-configure gd --with-freetype --with-jpeg \
    && docker-php-ext-install gd \
    && docker-php-ext-install zip pdo_mysql \
    && pecl install xdebug \
    && docker-php-ext-enable xdebug

# Install composer
COPY --from=composer:latest /usr/bin/composer /usr/bin/composer

# Copy the rest of the application
COPY . .

# Install application dependencies
RUN composer install --no-dev --optimize-autoloader

# Expose the port the app runs on
EXPOSE 8000

# Start the application using PHP-FPM
CMD ["php-fpm"]

